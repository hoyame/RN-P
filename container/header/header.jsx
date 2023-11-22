import { StyleSheet, View, Image, Text } from 'react-native'


const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1d204b',
        borderRadius: 15,
        marginBottom: 30

    }, 
    banner: {
        padding: 20,
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#5746ea'
    },
    text: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontSize: 17
    },
    textSelected: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize: 17
    }
});

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Image style={{height: 80, width: 80, borderRadius: 50, marginRight: 20}} source={{uri: "https://cdn.discordapp.com/avatars/807969721660080138/bfb9f234f8360cffce40cfddd8e3abe8.png?size=2048"}}></Image>
            
                <View>
                    <Text style={{color: "#b9b3ff", fontSize: 16}}>Report for</Text>
                    <Text style={{color: "#fff", fontSize: 22}}>Hoyame Zouhari</Text>
                </View>
            </View>

            <View style={{
                display: 'flex', 
                flexDirection: "row", 
                justifyContent: 'space-between', 
                padding: 20,
                paddingLeft: 30,
                paddingRight: 30,
            }}>
                <Text style={styles.text}>Daily</Text>
                <Text style={styles.textSelected}>Weekly</Text>
                <Text style={styles.text}>Monthly</Text>
            </View>
        </View>
    );
}

export default Header;