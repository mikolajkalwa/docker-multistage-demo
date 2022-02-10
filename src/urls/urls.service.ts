import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlsService {
  private readonly urls: Map<string, string>;
  constructor() {
    this.urls = new Map<string, string>();
  }

  create(url: string) {
    const id = nanoid(10);
    this.urls.set(id, url);
    return { id, url };
  }

  get(id: string): string {
    return this.urls.get(id);
  }
}
