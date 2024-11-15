import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export function NavigationMenuComponent() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item One</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link1">Link 1</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link2">Link 2</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link3">Link 3</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link1">Link 1</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link2">Link 2</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link3">Link 3</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Item Three</NavigationMenuTrigger>
					<NavigationMenuContent>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link1">Link 1</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link2">Link 2</NavigationMenuLink>
						</div>
						<div className="w-[400px] gap-3 p-4">
							<NavigationMenuLink href="/link3">Link 3</NavigationMenuLink>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}
