import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
	ICredentialTestRequest
} from 'n8n-workflow';

export class LlamaCppApi implements ICredentialType {
	name = 'llamaCppApi';
	displayName = 'Llama Cpp API';
	documentationUrl = '';

	properties: INodeProperties[] = [
		{
			displayName: 'llama.cpp OpenAI endpoint',
			name: 'baseUrl',
			type: 'string',
			default: 'http://localhost:8000/v1',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			qs: {
				// 'base_url': '={{$credentials.baseUrl}}'
			}
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.baseUrl}}',
			url: '/models',
		},
	};
}
