import * as React from "react";
import { AlertComponent } from "./atomics/alert/alert";
// import Page from "@/app/dashboard/page";

export interface IAppProps {}

export interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return (
			// <>
			// 	<Page />
			// 	<Framework />
			// </>
			<div className="w-full h-full flex justify-center items-center bg-gray-100">
				<div className="w-1/2 flex justify-center items-center">
					<AlertComponent />
				</div>
			</div>
		);
	}
}
