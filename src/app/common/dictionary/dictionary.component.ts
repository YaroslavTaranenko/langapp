import { Component, OnInit } from '@angular/core';
import { LangService } from './../../lang.service';
import { Dictionary } from './../../dictionary';


@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {
  data: Dictionary[] = [];

  constructor(private langSrv: LangService) { }

  addEntry(word: string, trans: string, lang: string) {
    this.langSrv.addEntry(word, trans, lang);
  }
  // check(word: string, trans: string, lang: string) {
  //   alert('ok');
  // }

  ngOnInit() {
    this.getDictionary();
  }
  getDictionary(): void {
    this.langSrv.getData().subscribe(
      (data) => { this.data = data; }
    );
  }

}
