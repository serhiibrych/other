import { Component, Input, OnInit } from '@angular/core';
import { Repository } from 'src/app/models/repository.model';

@Component({
  selector: 'app-repositorycard',
  templateUrl: './repositorycard.component.html',
  styleUrls: ['./repositorycard.component.scss']
})
export class RepositorycardComponent implements OnInit {
  @Input() repository: Repository | undefined;

  ngOnInit(): void {
  }

  repositoryOpen(link: string) {
    window.open(link, '_blank');
  }
}
