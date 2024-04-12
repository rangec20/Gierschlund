/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:14
 */

interface IBill{
    id: number,
    user: string,
    purposeOfTransfer: string,
    transactionPartner: string,
    price: number,
    dateOfTransfer: Date,
    pending: boolean,
    imageUrl: string
}