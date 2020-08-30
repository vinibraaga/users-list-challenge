import { Users, simpleUsers, websiteUsers, defaultUsers } from "../protocols";
import axios from "../helpers/axios";
import jsonParse from "../helpers/jsonParse";
import orderAlphabeticalData from "../helpers/orderAlphabeticalData"

class UsersService implements Users {
	private config = axios.axiosConfig();

	public async getUsers(): Promise<defaultUsers[]> {
		const data = await this.config
			.get("/users")
			.then(response => {
				const { data } = response;
				return jsonParse(data);
			})
			.catch(err => {
				throw new Error(err);
			});

		return data;
	}

	public async getWebsites(): Promise<websiteUsers[]> {
		const users = await this.getUsers();

		let webUsers = [];

		users.map(user => {
			if (user.website) {
				webUsers.push({ name: user.name, website: user.website });
			}
		});

		return webUsers;
	}

	public async getAlphabeticalOrder(): Promise<simpleUsers[]> {
		const users = await this.getUsers();

		let orderUsers = [];

		users.map(user => {
			orderUsers.push({
				name: user.name,
				email: user.email,
				company: user.company.name,
			});
		});

		return orderAlphabeticalData(orderUsers, "name");
	}

	public async getUsersFilter(): Promise<defaultUsers[]> {
		const users = await this.getUsers();

		return users.filter((item) => {
			return item.address.suite.toLowerCase().indexOf('suite') > -1;
		});
	}
}

export default new UsersService();
