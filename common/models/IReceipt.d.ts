/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:14
 */

interface IReceipt{
    id: number,
    creatorUser: IUser,
    completedUser: IUser,
    purposeOfTransfer: string,
    transactionPartner: string,
    price: number,
    dateOfTransfer: Date,
    imageUrl: string
    household: IHousehold
}