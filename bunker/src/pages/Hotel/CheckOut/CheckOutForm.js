import React from "react";
import {Header, Segment} from "semantic-ui-react";
const CheckOutForm = props => {
	const {reservation, isUseReward, user, hotel} = props;

	const totalPrice = isUseReward
		? reservation.price - user.reward_points
		: reservation.price;
	return (
		<Segment>
			<p>Hotel: {hotel.data.name}</p>
			<p>
				Address: {hotel.data.address.street}, {hotel.data.address.city},{" "}
				{hotel.data.address.state}, {hotel.data.address.country}
			</p>
			<p>Type: {reservation.room_types}</p>
			<p>Number of Room: {reservation.roomQuantity}</p>
			{!isUseReward ? (
				<p>Total Price: {totalPrice}</p>
			) : (
				<p>Discounted Price: {totalPrice}</p>
			)}
		</Segment>
	);
};

export default CheckOutForm;