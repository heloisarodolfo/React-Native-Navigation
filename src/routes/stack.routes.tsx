import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Screen, Navigator } = createNativeStackNavigator();

import { ScreenA } from '../screens/ScreenA'
import { ScreenB } from '../screens/ScreenA'

export function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name='screenA'
                component={ScreenA}
                options={{
                    title: 'Home'
                }}
            />
            <Screen
                name='screenB'
                component={ScreenB}
                options={{
                    title: 'Tela B',
                    headerTittleAlign: 'left',
                    headerStyle:{
                        backgroundColor: 'red'
                    },
                    headerTintColor: '#fff'
                }}
            />
        </Navigator>
    )
}