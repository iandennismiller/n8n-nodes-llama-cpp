import {
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest
} from 'n8n-workflow';

export class LlamaCppApi implements ICredentialType {
	name = 'llamaCppApi';
	displayName = 'llama.cpp server (and OAI-compatible)';
	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'OpenAI-compatible base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8000/v1',
		},
	];
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.baseUrl}}',
			url: '/models',
		},
	};
}
