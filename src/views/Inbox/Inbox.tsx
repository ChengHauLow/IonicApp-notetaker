import { IonContent, IonGrid, IonCol, IonRow, IonButton, IonToast, IonList, IonItem, IonLabel, IonBadge} from '@ionic/react';
import './Inbox.css'

const Inbox = () => {
  return (
    <IonContent id='inbox-area'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Hello from Inbox</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton id="open-toast" expand="block">
          Open
        </IonButton>
        <p>This toast example uses triggers to automatically open a toast when the button is clicked.</p>
        <IonList>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge onClick={()=>{console.log('Followers - 22k');}} color="primary">22k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge onClick={()=>{console.log('Likes - 118k');}} color="secondary">118k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge onClick={()=>{console.log('Stars - 34k');}} color="tertiary">34k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge onClick={()=>{console.log('Completed - 80');}} color="success">80</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge onClick={()=>{console.log('Warnings - 70');}} color="warning">70</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge onClick={()=>{console.log('Notifications - 1000');}} color="danger">1000</IonBadge>
          </IonItem>
        </IonList>
        <IonToast position='bottom' trigger="open-toast" message="This toast will disappear after 5 seconds" duration={5000}></IonToast>
    </IonContent>
  )
}

export default Inbox