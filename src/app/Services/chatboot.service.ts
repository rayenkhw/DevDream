import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

export class Message{
  constructor(public author:string,public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatbootService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any = {
    "hi": "bonjour",
    "Hi": "Bonjour",
    "Qu'est-ce qu'Angular ?": "Angular est un framework JavaScript open-source développé par Google, principalement utilisé pour créer des applications Web à une seule page (SPA).",
    "Qu'est-ce que Spring Boot ?": "Spring Boot est un framework Java open-source qui simplifie le développement d'applications Spring en fournissant des configurations par défaut et en minimisant la configuration manuelle.",
    "Comment ça va ?": "Ça va bien, merci ! Et vous ?",
    "Quel est ton nom ?": "Je suis un chatbot créé pour vous aider. Vous pouvez m'appeler ChatGPT.",
    "Peux-tu m'aider avec Angular ?": "Bien sûr ! Posez-moi vos questions sur Angular et je ferai de mon mieux pour vous aider.",
    "Quels sont les avantages de Spring Boot ?": "Spring Boot simplifie la configuration et le démarrage des projets Spring, offre une intégration étroite avec d'autres technologies Spring, et permet de développer rapidement des applications robustes.",
    "Quelle est la différence entre Angular et AngularJS ?": "Angular est la version plus récente d'AngularJS, avec des performances améliorées, une architecture modulaire et de meilleures fonctionnalités de test.",
    "Quand es-tu disponible ?": "Je suis disponible 24/7 pour répondre à vos questions ! N'hésitez pas à poser votre question quand vous le souhaitez.",
    "Un étudiant demande à son encadrant quand vous êtes disponible ?": "Si vous avez besoin de moi, n'hésitez pas à me demander à tout moment ! Je suis ici pour aider.",
    "default": "i cant undrestand. Can you please repeat other WIse."
  };
  getBotAnswer(msg:any){
    const userMessage= new Message('user',msg);
    this.conversation.next([userMessage]);
    const botMessage = new Message('bot',this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMessage]);
    },1500);

  }
  getBotMessage(question: string) {
    console.log("Received question:", question); // Log the question received
    let answer = this.messageMap[question];
    console.log("Answer:", answer); // Log the answer retrieved from messageMap
    return answer || this.messageMap['default'];
  }
  
  
  
}
