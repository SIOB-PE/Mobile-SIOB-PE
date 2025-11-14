import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="Home" options={{ title: 'Início' }} />
      <Tabs.Screen name="MyRegisters" options={{ title: 'Meus Registros' }} />
      <Tabs.Screen name="NewOccurrence" options={{ title: 'Registrar nova ocorrência' }} />
    </Tabs>
  );
}