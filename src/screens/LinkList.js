import React,{useEffect, useCallback, useState} from 'react'
import {ScrollView, Text, ActivityIndicator,Button} from 'react-native'
import Link from './link'
import { useDispatch } from "react-redux";
import { useLazyQuery } from '@apollo/react-hooks';
import {FEED_QUERY} from '../queryAndMutation/glQueriesAndMutation'



const LinkList = () => {

   const [execute, { loading, data }] = useLazyQuery(FEED_QUERY);

   const dispatch = useDispatch();

    const callAPI = () => {
        console.log("callApi")
        execute()
    }
    
    if(data && data.BusinessTypes.length>0){
        console.log("DATA LENGTH",data.BusinessTypes.length)
        dispatch({ type: 'SAVE_DATA_IN_STORE',data});
   }

   if (loading) return <ActivityIndicator/>

    return (
        <ScrollView>
            <Button onPress={()=>callAPI()} title="Call me"></Button>
            {
                (data && data.BusinessTypes.length>0) ? data.BusinessTypes.map(link => <Link key={link.businessId} link={link} />)
                 :
                 <Text>No data</Text>
                
            }
        </ScrollView>
    )
    
}

export default LinkList