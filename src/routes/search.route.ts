import { Router } from 'express'
import { searchSchema } from 'helpers/validator.helper'
import { SearchController } from '../controllers/search.controller'
import type { Routes } from '../interfaces/routes.interface'

export class SearchRoute implements Routes {
  public path = '/search'
  public router = Router()
  public searchController = new SearchController()

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.searchController.searchAll)
    this.router.get(`${this.path}/songs`, searchSchema, this.searchController.searchSongs)
    this.router.get(`${this.path}/albums`, searchSchema, this.searchController.searchAlbums)
  }
}
