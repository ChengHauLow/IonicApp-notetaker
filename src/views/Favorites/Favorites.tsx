import { IonContent, IonGrid, IonCol, IonRow, IonModal, IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonInput, IonItem, IonPopover} from '@ionic/react';
import './Favorites.css'
import { useRef, useState } from 'react';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

const Favorites = () => {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.'
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }
  return (
    <IonContent id='favorites-area'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Hello from Favorites</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton id="open-modal" expand="block">
          Open
        </IonButton>
        <p>{message}</p>
        <IonButton id="click-trigger">Left-Click Me</IonButton>
        <IonPopover trigger="click-trigger" triggerAction="click">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>

        <IonButton id="context-menu-trigger">Right-Click Me</IonButton>
        <IonPopover trigger="context-menu-trigger" triggerAction="context-menu">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>

        <IonButton id="hover-trigger">Hover Over Me</IonButton>
        <IonPopover trigger="hover-trigger" triggerAction="hover">
          <IonContent class="ion-padding">Hello World!</IonContent>
        </IonPopover>
        <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
              </IonButtons>
              <IonTitle>Welcome</IonTitle>
              <IonButtons slot="end">
                <IonButton strong={true} onClick={() => confirm()}>
                  Confirm
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonItem>
              <IonInput
                label="Enter your name"
                labelPlacement="stacked"
                ref={input}
                type="text"
                placeholder="Your name"
              />
            </IonItem>
          </IonContent>
        </IonModal>
    </IonContent>
  )
}

export default Favorites