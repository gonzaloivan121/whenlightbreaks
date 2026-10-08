import { inject, Service } from '@angular/core';

import { Artist, CreateArtist, UpdateArtist, DeleteArtist } from '@models/artist.model';

import { ArtistID } from '@app/types/artist.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Artist` data.
 *
 * @export
 * @class ArtistService
 */
@Service()
export class ArtistService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Artist` instance and adds it to the list of artists.
     *
     * @param {CreateArtist} createArtist - The `CreateArtist` object containing the data for the new `Artist` instance.
     * @memberof ArtistService
     */
    public CreateArtist(createArtist: CreateArtist) {
        return this.apiService.Create<Artist>(EndpointRoute.Artist, createArtist);
    }

    /**
     * Retrieves a list of all `Artist` instances.
     *
     * @memberof ArtistService
     */
    public GetArtists() {
        return this.apiService.Get<Artist[]>(EndpointRoute.Artist);
    }

    /**
     * Retrieves an `Artist` instance by its unique identifier.
     *
     * @param {ArtistID} id - The unique identifier of the `Artist` instance to retrieve.
     * @memberof ArtistService
     */
    public GetArtistById(id: ArtistID) {
        return this.apiService.GetById<Artist>(EndpointRoute.Artist, id);
    }

    /**
     * Updates an existing `Artist` instance with new data.
     *
     * @param {UpdateArtist} updateArtist - The `UpdateArtist` object containing the updated data for the `Artist` instance.
     * @memberof ArtistService
     */
    public UpdateArtist(updateArtist: UpdateArtist) {
        return this.apiService.Update<Artist>(EndpointRoute.Artist, updateArtist.id, updateArtist);
    }

    /**
     * Deletes an existing `Artist` instance.
     *
     * @param {DeleteArtist} deleteArtist - The `DeleteArtist` object containing the unique identifier of the `Artist` instance to delete.
     * @memberof ArtistService
     */
    public DeleteArtist(deleteArtist: DeleteArtist) {
        return this.apiService.Delete(EndpointRoute.Artist, deleteArtist.id);
    }
}
