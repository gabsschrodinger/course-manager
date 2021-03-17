import { Component, OnInit } from "@angular/core";
import { Course } from "./couse";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Intro to Angular',
                imageUrl: '/assets/img/angular.png',
                price: 12.50,
                code: 'ANG-001',
                duration: 120,
                rating: 4.5,
                releaseDate: 'December, 15, 2020'
            },
            {
                id: 2,
                name: 'Intro to HTML',
                imageUrl: '/assets/img/html.png',
                price: 9.50,
                code: 'WEB-001',
                duration: 90,
                rating: 3.5,
                releaseDate: 'July, 8, 2020'
            }
        ]
    }
}