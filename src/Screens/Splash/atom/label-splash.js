import React from 'react'
import Label from 'components/Label'
import Item from 'components/Item'


const LabelSplash = ({navigation}) => {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 3000);
    }, [])
    
    return (
        <Item>
            <Label>Movie lab</Label>
            <Label>Mobile Application</Label>
        </Item>
    )
}

export default LabelSplash