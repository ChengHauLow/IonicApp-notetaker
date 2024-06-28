import { IonContent, IonGrid, IonCol, IonRow, IonButton, IonActionSheet} from '@ionic/react';
import './Archived.css'

const Archived = () => {
  return (
    <IonContent id='archived-area'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Hello from Archived</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton id="open-action-sheet">Open</IonButton>
        <IonActionSheet
          trigger="open-action-sheet"
          header="Actions"
          buttons={[
            {
              text: 'Delete',
              role: 'destructive',
              data: {
                action: 'delete',
              },
            },
            {
              text: 'Share',
              data: {
                action: 'share',
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              data: {
                action: 'cancel',
              },
            },
          ]}
        ></IonActionSheet>
    </IonContent>
  )
}

export default Archived