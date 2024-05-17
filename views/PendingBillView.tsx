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


// const [receipts, setReceipts] = useState<IReceipt[]>([]);
//
// useEffect( () => {
//     setReceipts()
//
//   })
//
//
// }, []);

const PendingBillView = () => {



    return (
        <ScrollView>
            {/*{receipts.map((receipt ) => {*/}
            {/*    return <BillComponent bill={receipt}/>*/}
            {/*})}*/}
        </ScrollView>
    );
};

export default PendingBillView;

