import { Stack } from "expo-router";
import { useFonts, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Montserrat-SemiBold': Montserrat_600SemiBold // <-- Fonte carregada globalmente!
  });

  return(
    
    <Stack>
      <Stack.Screen name="login" options={{headerShown: false}}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}}/>
    </Stack>
  );
}
