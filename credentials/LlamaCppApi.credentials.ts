import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LlamaCppApi implements ICredentialType {
	name = 'llamaCppApi';
	displayName = 'Llama Cpp API';
	// documentationUrl = 'https://localhost:8000/docs';

	properties: INodeProperties[] = [
		{
			displayName: 'llama.cpp URL',
			name: 'baseUrl',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	// authenticate: IAuthenticateGeneric = {
	// 	type: 'generic',
	// 	properties: {
	// 		qs: {
	// 			'base_url': '={{$credentials.baseUrl}}'
	// 		}
	// 	},
	// };

	test = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/v1/models',
		},
	};
}
