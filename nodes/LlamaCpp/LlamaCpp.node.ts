import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class LlamaCpp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Llama Cpp',
        name: 'llamaCpp',
        icon: 'file:LlamaCppImg.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Interface with llama.cpp server or other OpenAI-compatible server',
        defaults: {
            name: 'Llama CPP',
        },
        inputs: ['main'],
        outputs: ['main'],
        credentials: [
            {
                name: 'llamaCppApi',
                required: false,
            },
        ],
        requestDefaults: {
            baseURL: '={{$credentials.baseUrl}}',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        },
		properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                type: 'options',
                noDataExpression: true,
                options: [
                    {
                        name: 'Default model',
                        value: 'default',
                    }
                ],
                default: 'default',
            },
            {
                displayName: 'Operation',
                name: 'operation',
                type: 'options',
                noDataExpression: true,
                displayOptions: {
                    show: {
                        resource: [
                            'default',
                        ],
                    },
                },
                options: [
                    {
                        name: 'Completion',
                        value: 'completion',
                        action: 'completion',
                        description: 'Pass $json["chatInput"] to LLM and return the completion',
                        routing: {
                            request: {
                                method: 'POST',
                                url: '/completions',
                                body: {
                                    prompt: '={{"You are a helpful assistant... " + $json["chatInput"]}}',
                                },
                            },
                        },
                    },
                ],
                default: 'completion',
            },
        ]
	};
}
