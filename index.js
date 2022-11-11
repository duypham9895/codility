class Subscriber {
  constructor(name, emailAddress, age) {
    this.name = name;
    this.emailAddress = emailAddress;
    this.age = age;
  }
}
class Message {
  constructor(content, minimumAge) {
    this.content = content;
    this.minimumAge = minimumAge;
  }
}
class NewsletterSystem {
  constructor(sendEmail) {
    // use console.log() for debugging
    this.observers = [];
    this.sendEmail = sendEmail;
    this.hashReceivers = {};
  }

  // Method for subscribing to, or "observing" observable
  subscribe(subscriber) {
    if (subscriber.age >= 13) {
      const isExistedSubscriber = this.observers.some(
        (subscribered) => subscribered === subscriber
      );
      if (!isExistedSubscriber) {
        this.observers.push(subscriber);
        this.hashReceivers[subscriber.emailAddress] = 0;
      }
    }
  }

  // Method for unsubscribing from observable
  unsubscribe(subscriber) {
    this.observers = this.observers.filter(
      ({ emailAddress }) => emailAddress !== subscriber.emailAddress
    );
  }

  trackSubscriber({ emailAddress }) {
    if (this.hashReceivers[emailAddress] === 0) {
      this.hashReceivers[emailAddress] += 1;
    }
  }

  sendNewsletter({ content, minimumAge }) {
    let validObservers = this.observers;
    if (minimumAge) {
      validObservers = this.observers.filter(({ age }) => age >= minimumAge);
    }

    console.log(this.hashReceivers);

    validObservers.forEach(({ name, emailAddress }) => {
      let modifyContent = content;
      if (this.hashReceivers[emailAddress] === 1) {
        modifyContent = `Hello ${name} ${content}`;
      }
      this.sendEmail(emailAddress, modifyContent);

      this.trackSubscriber({ emailAddress });
    });
  }
}

const sendEmail = (emailAddress, content) => {
  console.log(`To: ${emailAddress}: ${content}`);
};

const john = new Subscriber("john", "john@gmail.com", 20);
const mary = new Subscriber("mary", "mary@gmail.com", 10);
const loki = new Subscriber("loki", "loki@gmail.com", 35);
const doug = new Subscriber("doug", "doug@gmail.com", 16);

const newsLetter = new NewsletterSystem(sendEmail);

const sayHi = new Message("Hi everyone !");
const adult = new Message("For all adults", 16);

newsLetter.subscribe(john);
newsLetter.subscribe(mary);
newsLetter.subscribe(loki);

newsLetter.sendNewsletter(sayHi);

newsLetter.subscribe(doug);
newsLetter.sendNewsletter(adult);
