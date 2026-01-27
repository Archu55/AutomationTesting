import { browser } from '@wdio/globals';
export default class Page {
  open(path) {
    return browser.url(
      `https://accounts.google.com/lifecycle/steps/signup/name?continue=https://mail.google.com/mail/u/0/&dsh=S940205934:1767460746857547&emr=1&flowEntry=SignUp&flowName=GlifWebSignIn&followup=https://mail.google.com/mail/u/0/&ifkv=Ac2yZaUOyWEQamoB0CoWGDSz5ZBgr8LoXExK1xApqFfwl5GCNEARUaHQwuliJG2HYH6KEu6M7k8knw&osid=1&service=mail&TL=AHE1sGUTEA9cz1NrjIiWt0EONrxZhuldrA0azKh0dvbVynMfb3dwmAqsdrN-GPIa/${path}`
    );
  }
}
