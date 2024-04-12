/**
 * Project: GierschlundFrontend
 * Created by: rangec20
 * Date: 10.04.2024
 * Time: 09:38
 */

import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from "react-native";
import BillComponent from "./BillComponent";

const PendingBillView = () => {

    const [bills, setBills] = useState<IBill[]>([])

    useEffect(() => {
        setBills(require("../mockdata.json"))
    }, []);

    return (
        <ScrollView>
            {bills.map((bill ) => {
                return <BillComponent bill={bill}/>
            })}
        </ScrollView>
    );
};

export default PendingBillView;

