export type UserType = {
	name: string,
	login: string,
	html_url: string,
	avatar_url: string,
	followers: number,
	following: number,
	public_repos: number,
}

export type UserRepositoriesType = Array<{
	name: string,
	node_id: string,
	html_url: string,
	description: string | null,
}>
