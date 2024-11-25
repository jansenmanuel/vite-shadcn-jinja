import * as React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DataTableDemo } from "./DataTable";

export interface IFormworkProps {}

export interface IFormworkState {}

export default class Formwork extends React.Component<
	IFormworkProps,
	IFormworkState
> {
	constructor(props: IFormworkProps) {
		super(props);

		this.state = {};
	}

	public render() {
		return (
			<>
				<div className="space-y-10">
					<div className="space-y-1">
						{/* Title Page */}
						<p className="text-2xl font-medium">Title Page</p>

						{/* Breadcrumb */}
						<Breadcrumb>
							<BreadcrumbList>
								<BreadcrumbItem>
									<BreadcrumbLink href="/">Home</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbLink href="/components">Components</BreadcrumbLink>
								</BreadcrumbItem>
								<BreadcrumbSeparator />
								<BreadcrumbItem>
									<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
								</BreadcrumbItem>
							</BreadcrumbList>
						</Breadcrumb>
					</div>

					{/* Table */}
					<DataTableDemo />
				</div>
			</>
		);
	}
}
