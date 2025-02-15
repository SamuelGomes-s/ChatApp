import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "../pages/ChatRoom";
import SignIn from "../pages/Login/SignIn";
import Search from "../pages/Search";
import Messages from "../pages/Messages";

const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
    return (
        <AppStack.Navigator initialRouteName="ChatRoom">
            <AppStack.Screen name="SignIn" component={SignIn} options={{ title: 'Faça o login', headerShown: true }} />
            <AppStack.Screen name="ChatRoom" component={ChatRoom} options={{ headerShown: false }} />
            <AppStack.Screen name="Search" component={Search} options={{ title: 'Procurando algum grupo?' }} />
            <AppStack.Screen name="Messages" component={Messages} options={({ route }) => ({
                title: route.params.thread.name
            })} />
        </AppStack.Navigator>
    )
}