import { inject, Service } from '@angular/core';

import { Album, CreateAlbum, DeleteAlbum, UpdateAlbum } from '@models/album.model';

import { AlbumID } from '@app/types/album.type';
import { ArtistID } from '@app/types/artist.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Album` data.
 *
 * @export
 * @class AlbumService
 */
@Service()
export class AlbumService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Album` instance and adds it to the list of albums.
     *
     * @param {CreateAlbum} createAlbum - The `CreateAlbum` object containing the data for the new `Album` instance.
     * @memberof AlbumService
     */
    public CreateAlbum(createAlbum: CreateAlbum) {
        return this.apiService.Create<Album>(EndpointRoute.Album, createAlbum);
    }

    /**
     * Retrieves a list of all `Album` instances.
     *
     * @returns {Promise<Album[]>} A promise that resolves with the list of all `Album` instances.
     * @memberof AlbumService
     */
    public GetAlbums() {
        return this.apiService.Get<Album[]>(EndpointRoute.Album);
    }

    /**
     * Retrieves an `Album` instance by its unique identifier.
     *
     * @param {AlbumID} id - The unique identifier of the `Album` instance to retrieve.
     * @memberof AlbumService
     */
    public GetAlbumById(id: AlbumID) {
        return this.apiService.GetById<Album>(EndpointRoute.Album, id);
    }

    /**
     * Retrieves a list of `Album` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Album` instances are to be retrieved.
     * @memberof AlbumService
     */
    public GetAlbumsByArtistId(artistId: ArtistID) {
        return this.apiService.GetByDependantId<Album[]>(
            EndpointRoute.Album,
            EndpointRoute.Artist,
            artistId,
        );
    }

    /**
     * Updates an existing `Album` instance with new data.
     *
     * @param {UpdateAlbum} updateAlbum - The `UpdateAlbum` object containing the updated data for the `Album` instance.
     * @memberof AlbumService
     */
    public UpdateAlbum(updateAlbum: UpdateAlbum) {
        return this.apiService.Update<Album>(EndpointRoute.Album, updateAlbum.id, updateAlbum);
    }

    /**
     * Deletes an existing `Album` instance.
     *
     * @param {DeleteAlbum} deleteAlbum - The `DeleteAlbum` object containing the unique identifier of the `Album` instance to delete.
     * @memberof AlbumService
     */
    public DeleteAlbum(deleteAlbum: DeleteAlbum) {
        return this.apiService.Delete(EndpointRoute.Album, deleteAlbum.id);
    }
}
