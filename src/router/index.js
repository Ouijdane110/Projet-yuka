import BarCodeScreen from '../screens/BarCode';
import ErrorScreen from '../screens/Error';
import FavorisScreen from '../screens/Favoris';
import HistoriqueScreen from '../screens/Historique';
import DetailsBarCodeScreen from '../screens/DetailsBarCode';

// Icon :
import CodeBar from '../components/Icon/codebar';
import Hearth from '../components/Icon/hearth';
import Historique from '../components/Icon/historique';

const roadMap = [
    { name: 'Historique', component: HistoriqueScreen, inTab: true, icon: Historique },
    { name: 'BarCode', component: BarCodeScreen, inTab: true, icon: CodeBar },
    { name: 'Favoris', component: FavorisScreen, inTab: true, icon: Hearth },
    { name: 'Error', component: ErrorScreen, inTab: false },
    { name: 'DetailsBarCode', component: DetailsBarCodeScreen, inTab: false },
];

export default roadMap;