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
	const {
		activeMenu,
		setActiveMenu,
		isClicked,
		setIsClicked,
		handleClick,
		screenSize,
		setScreenSize,
	} = useStateContext();

	useEffect(() => {
		const handleResize = () => setScreenSize(window.innerWidth);

		addEventListener("resize", handleResize);

		handleResize();

		return () => removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
	}, [screenSize]);

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
					customFunc={() => handleClick("cart")}
					icon={<FiShoppingCart />}
					color={"blue"}
				/>
				<NavButton
					title={"Chat"}
					customFunc={() => handleClick("chat")}
					icon={<BsChatLeft />}
					color={"blue"}
					dotColor="yellow"
				/>
				<NavButton
					title={"Notification"}
					customFunc={() => handleClick("notification")}
					icon={<RiNotification3Line />}
					color={"blue"}
					dotColor="yellow"
				/>

				<TooltipComponent content={"Profile"} position="BottomCenter">
					<button
						type="button"
						className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
						onClick={() => handleClick("userProfile")}
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
						<MdKeyboardArrowDown className="text-gray-400 text-14" />
					</button>
				</TooltipComponent>

				{isClicked.cart && <Cart />}
				{isClicked.chat && <Chat />}
				{isClicked.notification && <Notification />}
				{isClicked.userProfile && <UserProfile />}
			</div>
		</div>
	);
};

export default Navbar;
