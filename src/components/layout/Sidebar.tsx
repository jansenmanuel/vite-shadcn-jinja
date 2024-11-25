import * as React from "react";

export interface ISidebarProps {}

export interface ISidebarState {}

export default class Sidebar extends React.Component<
	ISidebarProps,
	ISidebarState
> {
	constructor(props: ISidebarProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return <div>Sidebar</div>;
	}
}
