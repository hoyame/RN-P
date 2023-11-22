import { StyleSheet, View, Image, Text } from 'react-native'
import { globalStyles } from '../../globalStyles';

const Item = (props) => {
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            marginBottom: 15,
            borderRadius: 15,
        }, 
        content: {
            padding: 20,
            backgroundColor: '#1d204b',
            borderRadius: 15,
        }
    });
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={globalStyles.flexRowSpaceBetween}>
                    <Text style={{
                        color: props.color,
                        fontSize: 18,
                        fontWeight: '400'
                    }}>{props.name}</Text>

                    <View style={{
                        height: 18,
                        width: 18,
                        borderRadius: 50,
                        backgroundColor: props.color
                    }}></View>
                </View>

                <View style={globalStyles.flexRowSpaceBetween}>
                    <Text style={{
                        color: "#fff",
                        fontSize: 35,
                        fontWeight: '200'
                    }}>{props.hours}hrs</Text>

                    <Text style={{
                        color: "rgba(255, 255, 255, 0.5)",
                        fontSize: 13,
                        fontWeight: '200'
                    }}>Last Week - {props.lastWeekHours}hrs</Text>
                </View>
            </View>
        </View>
    );
}

export default Item;