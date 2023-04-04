import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

export interface curriculumList {
  title: string;
  version: string;
  date: string;
  author: string;
  role: string;
  status: string;
  isCurrent: string;
}


@Component({
  selector: 'app-curriculum-management',
  templateUrl: './curriculum-management.component.html',
  styleUrls: ['./curriculum-management.component.css']
})
export class CurriculumManagementComponent implements OnInit {

  //pang filter
  private _listFilter: string = '';
  get listFilter(): string{ 
      return this._listFilter;
  }
  set listFilter(value: string){
      this._listFilter=value;
      this.filteredList = this.performFilter(value);
  }
  //pang filter

  filteredList: curriculumList[]=[]; //array ng filtered list

  data: curriculumList[] = [
    {'title':'CICT Curriculum Ver.',
    'version':'3.2.1',
    'date':'04-03-2005',
    'author':'Kyla Delfin',
    'role':'Chair',
    'status':'Proposed',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.2.0',
    'date':'01-12-2004',
    'author':'Mang Ben',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.9',
    'date':'01-12-2004',
    'author':'Kervs',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.8',
    'date':'01-12-2004',
    'author':'Von Plaza',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.7',
    'date':'01-12-2004',
    'author':'Kervin',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.6',
    'date':'01-12-2004',
    'author':'Von Plaza',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.5',
    'date':'01-12-2004',
    'author':'Von Plaza',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
    {'title':'CICT Curriculum Ver.',
    'version':'3.1.4',
    'date':'01-12-2004',
    'author':'Von Plaza',
    'role':'Chair',
    'status':'For revision',
    "isCurrent":"false"},
  ];

  //pangfilter 
  performFilter(filterBy: string): curriculumList[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.data.filter((titles: curriculumList)=>
    titles.title.toLowerCase().includes(filterBy)||
    titles.version.toLowerCase().includes(filterBy)||
    titles.date.toLowerCase().includes(filterBy)||
    titles.author.toLowerCase().includes(filterBy)||
    titles.role.toLowerCase().includes(filterBy)||
    titles.status.toLowerCase().includes(filterBy)||
    titles.isCurrent.toLowerCase().includes(filterBy)
    );
}
//pangfilter
 
  
//paginator
  totalItems = this.data.length; // Total number of items in your table
  pageSize = 3; // Number of items to display per page
  pageSizeOptions = [3, 5, 10]; // Options for the number of items per page

  currentPageIndex = 0; // Current page index
  displayedItems: any[] = []; // The items to display on the current page
  //paginator

  constructor() { }

  //pang filter
  ngOnInit(): void {
    this.listFilter = '';
  }
  //pang filter

  //pang check kung may laman yung search input (para di mawalan ng laman yung table)
  ngDoCheck(): void{
    if(!this.listFilter){
      this.totalItems = this.data.length;
      this.loadPageWithoutFilter(this.currentPageIndex);
    }
    else{
      this.totalItems = this.filteredList.length;
      this.loadPageWithFilter(this.currentPageIndex);
    }
  }

  //pang check kung may laman yung search input (para di mawalan ng laman yung table)


  //paginator
  onPageChange(event: PageEvent): void {
    this.currentPageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.loadPageWithoutFilter(this.currentPageIndex);
  }
  
  loadPageWithoutFilter(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.data.slice(startIndex, endIndex);
  }
  loadPageWithFilter(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedItems = this.filteredList.slice(startIndex, endIndex);
  }
//paginator

}
