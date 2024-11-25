import * as React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Formwork from "./Formwork";

export interface IFrameworkProps {}

export interface IFrameworkState {}

export default class Framework extends React.Component<
	IFrameworkProps,
	IFrameworkState
> {
	constructor(props: IFrameworkProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return (
			<div className="w-full h-full">
				<div className="h-[5%] bg-slate-400 border-b border-gray-100 flex justify-center items-center">
					<Header />
				</div>
				<div className="flex h-[95%]">
					<div className="h-full w-1/5 bg-slate-300 border-r border-gray-100 flex justify-center items-center">
						<Sidebar />
					</div>
					<div className="h-full w-4/5 bg-gray-100 p-5">
						<Formwork />
					</div>
				</div>
			</div>
		);
	}
}
