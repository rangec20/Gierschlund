/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:38
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import BillComponent from "./BillComponent";
import {supabase} from "../utils/supabase";




const PendingBillView = () => {

    const [receipts, setReceipts] = useState<IReceipt[]>([]);

    useEffect(() => {
        setReceipts(require("../mockdata.json"))
    }, []);

    return (
        <ScrollView>
            {receipts.map((receipt ) => {
                // console.log(receipt)
                return <BillComponent receipt={receipt}/>
            })}
        </ScrollView>
    );
};

export default PendingBillView;

