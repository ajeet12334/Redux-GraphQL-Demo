import React from 'react'
import {View, Text} from 'react-native'

const Link = (props) =>  {
    
        return (
            <View>
                <Text>
                    {props.link.businessName} {props.link.businessId}
                </Text>
            </View>
        )
    
}

export default Link