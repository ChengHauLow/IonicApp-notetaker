import { IonContent, IonGrid, IonCol, IonRow, IonFab, IonFabButton, IonIcon, IonFabList, ItemReorderEventDetail, IonList, IonItem, IonLabel, IonReorderGroup, IonReorder} from '@ionic/react';
import './Spam.css'
import { chevronUpCircle, document, colorPalette, globe } from 'ionicons/icons';

const Spam = () => {
  function handleReorder(event: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', event.detail.from, 'to', event.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    event.detail.complete();
  }
  return (
    <IonContent id='spam-area'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Hello from Spam</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonList>
          {/* The reorder gesture is disabled by default, enable it to drag and drop items */}
          <IonReorderGroup disabled={false} onIonItemReorder={handleReorder}>
            <IonItem>
              <IonLabel>Item 1</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 2</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 3</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 4</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>

            <IonItem>
              <IonLabel>Item 5</IonLabel>
              <IonReorder slot="end"></IonReorder>
            </IonItem>
          </IonReorderGroup>
        </IonList>
        <IonFab slot="fixed" vertical="top" horizontal="start">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="bottom">
            <IonFabButton>
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
    </IonContent>
  )
}

export default Spam