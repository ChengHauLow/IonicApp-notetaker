import { IonContent, IonGrid, IonCol, IonRow, IonButton, IonAlert, IonList, IonItem, IonAvatar, IonLabel, IonInfiniteScroll, IonInfiniteScrollContent} from '@ionic/react';
import './Outbox.css'
import { useEffect, useState } from 'react';

const Outbox = () => {
  const [items, setItems] = useState<string[]>([]);
  const genRandomWholeNumber = (max: number) =>{
    return Math.floor(Math.random() * max);
  }
  const generateItems = () => {
    const newItems = [];
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + genRandomWholeNumber(999999)}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <IonContent id='outbox-area'>
        <IonGrid>
          <IonRow>
            <IonCol>
              <h1>Hello from Outbox</h1>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton id="present-alert">Click Me</IonButton>
        <IonAlert
          trigger="present-alert"
          header="A Short Title Is Best"
          subHeader="A Sub Header Is Optional"
          message="A message should be a short, complete sentence."
          buttons={['Action']}
          onDidPresent={()=>console.log('openned')}
          onDidDismiss={()=>console.log('closed')}
        ></IonAlert>
        <IonList>
          {items.map((item, index) => (
            <IonItem key={item}>
              <IonAvatar slot="start">
                <img src={'https://picsum.photos/80/80?random=' + index} alt="avatar" />
              </IonAvatar>
              <IonLabel>{item}</IonLabel>
            </IonItem>
          ))}
        </IonList>
        <IonInfiniteScroll
          onIonInfinite={(ev) => {
            generateItems();
            setTimeout(() => ev.target.complete(), 500);
          }}
        >
          <IonInfiniteScrollContent></IonInfiniteScrollContent>
        </IonInfiniteScroll>
    </IonContent>
  )
}

export default Outbox