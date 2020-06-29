interface User {
	name: String;
	username: String;
	email: String;
	readonly password: String;
	createdAt: Date;
	posts?: [String];
	comments?: [String];
	friends?: [User];
	notifications?: [];
	role?: String;
	photos?: String;
	about?: {
		OfficeAddress?: String;
	};
	socialMedia?: {
		facebook?: String;
		twitter?: String;
		Google?: String;
		pinterest?: String;
	};
}
