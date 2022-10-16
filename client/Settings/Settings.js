export default function Settings({setPageID, setUserNameGlobal, setPasswordGlobal, username, userID}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Settings</Text>
            <Button
                title="Logout"
                onPress={() => {
                    setPageID("login");
                    setUserNameGlobal("");
                    setPasswordGlobal("");
                }}
            />
        </View>
    )
}