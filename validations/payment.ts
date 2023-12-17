import { specialCharacters, upiServices } from "@/constants/variables";
import { ICardDetails } from "@/types/order";

export const validateUpi = async (upi: string) => {
	if (!upi.includes("@")) return Promise.reject("UPI is invalid");
	if (upi.split("@").length > 2) return Promise.reject("UPI is invalid");
	if (upi.includes(" ")) return Promise.reject("UPI is invalid");
	if (specialCharacters.split("").some((char) => upi.split("@")[0].includes(char))) return Promise.reject("UPI is Invalid");
	if (!upiServices.includes(upi.split("@")[1]))
		return Promise.reject("UPI is invalid");
	return Promise.resolve();
};

export const validateCard = async (cardDetails: ICardDetails) => {
	if (cardDetails.cardNumber.length < 16)
		return Promise.reject("Card number is too short");
	if (cardDetails.cardNumber.length > 16)
		return Promise.reject("Card number is too long");
	if (cardDetails.cvv.length < 3) return Promise.reject("CVV is too short");
	if (cardDetails.cvv.length > 3) return Promise.reject("CVV is too long");
	return Promise.resolve();
};
