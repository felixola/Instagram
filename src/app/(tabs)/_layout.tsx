import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: false,
          }}>
            <Tabs.Screen name="index" options={{headerTitle: 'For you', 
                tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} />,}}/>

<Tabs.Screen
    name="new"
    options={{
      title: 'Create post',
      tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus-square-o" color={color} />,
    }}
  />

  <Tabs.Screen
    name="profile"
    options={{
      title: 'Profile',
      tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
    }}
  />  
        </Tabs>
    );
}