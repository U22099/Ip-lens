import Notify from 'simple-notify';
import 'simple-notify/dist/simple-notify.css';

export default function showToast(status, title, text){
  new Notify({
    status,
    title,
    text,
    effect: 'slide',
    speed: 300,
    showIcon: true,
    showCloseButton: true,
    autoclose: true,
    autotimeout: 3000,
    type: 'outline',
    position: 'top'
  })
}