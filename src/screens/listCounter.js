import React from 'react'
import {View, Text} from 'react-native'
import {useSelector} from 'react-redux'

const ListCounter = () => {   

    const data1 = useSelector(state => state);

    console.log("ListCounter data : ",data1.articleReducers.data.BusinessTypes)
        return (
            <View>
                <Text>
                    Total Item : {data1.articleReducers.data.BusinessTypes ? data1.articleReducers.data.BusinessTypes.length : 0}
                </Text>
            </View>
        )
}

export default ListCounter