import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { lastValueFrom } from 'rxjs'

// NX dependiecas de paquetes

interface PostInfo {
  id: number
  title: string
  userId: number
  body: string
}

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  standalone: true,
  template: ``,
})
export class HttpClientComponent {
  posts: PostInfo[] = []

  // Como la solucion tiene definidos unos interceptores, y se declaran a nivel global del proyecto de angular,
  // nuestro ejecicio se va a ver afectado por esos interceptores.
  // Hay que quitarlos de app.config.ts
  constructor(private readonly myhttpClient: HttpClient) {
    this.getInfo()
  }

  async getInfo() {
    const result = await lastValueFrom(this.myhttpClient.get<PostInfo[]>('posts'))
    this.posts = result
  }
}
