import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
	return (
		<TooltipComponent content={title} position="BottomCenter">
			<button
				type="button"
				onClick={customFunc}
				style={{ color }}
				className="relative text-xl rounded-full p-3 hover:bg-light-gray"
			>
				<span
					style={{ background: dotColor, width: "0.5rem", height: "0.5rem" }}
					className="absolute inline-flex rounded-full right-2 top-2"
				>
					{icon}
				</span>
			</button>
		</TooltipComponent>
	);
};

const Navbar = () => {
	const { activeMenu, setActiveMenu } = useStateContext();

	return (
		<div className="flex justify-between p-2 md:mx-6 relative">
			<NavButton
				title={"Menu"}
				customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
				icon={<AiOutlineMenu />}
				color={"blue"}
			/>

			<div className="flex">
				<NavButton
					title={"Cart"}
					customFunc={() => {}}
					icon={<FiShoppingCart />}
					color={"blue"}
				/>
				<NavButton
					title={"Chat"}
					customFunc={() => {}}
					icon={<BsChatLeft />}
					color={"blue"}
					dotColor="yellow"
				/>
				<NavButton
					title={"Notification"}
					customFunc={() => {}}
					icon={<RiNotification3Line />}
					color={"blue"}
					dotColor="yellow"
				/>

				<TooltipComponent content={"Profile"} position="BottomCenter">
					<div
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => {}}
					>
						<img
							className="rounded-full"
							src={avatar}
							alt="User Avatar"
							style={{ width: "2rem", height: "2rem" }}
						/>
						<p>
							<span className="text-gray-400 font text-14">Hi,</span>{" "}
							<span className="text-gray-400 font-bold text-16">John</span>
						</p>
					</div>
				</TooltipComponent>
			</div>
		</div>
	);
};

export default Navbar;
