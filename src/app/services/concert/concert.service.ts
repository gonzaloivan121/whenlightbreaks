import { inject, Service } from '@angular/core';

import { Concert, CreateConcert, DeleteConcert, UpdateConcert } from '@models/concert.model';

import { ConcertID } from '@app/types/concert.type';
import { ArtistID } from '@app/types/artist.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Concert` data.
 *
 * @export
 * @class ConcertService
 */
@Service()
export class ConcertService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Concert` instance and adds it to the list of concerts.
     *
     * @param {CreateConcert} createConcert - The `CreateConcert` object containing the data for the new `Concert` instance.
     * @memberof ConcertService
     */
    public CreateConcert(createConcert: CreateConcert) {
        return this.apiService.Create<Concert>(EndpointRoute.Concert, createConcert);
    }

    /**
     * Retrieves a list of all `Concert` instances.
     *
     * @memberof ConcertService
     */
    public GetConcerts() {
        return this.apiService.Get<Concert[]>(EndpointRoute.Concert);
    }

    /**
     * Retrieves a `Concert` instance by its unique identifier.
     *
     * @param {ConcertID} id - The unique identifier of the `Concert` instance to retrieve.
     * @memberof ConcertService
     */
    public GetConcertById(id: ConcertID) {
        return this.apiService.GetById<Concert>(EndpointRoute.Concert, id);
    }

    /**
     * Retrieves a list of `Concert` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Concert` instances are to be retrieved.
     * @memberof ConcertService
     */
    public GetConcertsByArtistId(artistId: ArtistID) {
        return this.apiService.GetByDependantId<Concert[]>(
            EndpointRoute.Concert,
            EndpointRoute.Artist,
            artistId,
        );
    }

    /**
     * Updates an existing `Concert` instance with new data.
     *
     * @param {UpdateConcert} updateConcert - The `UpdateConcert` object containing the updated data for the `Concert` instance.
     * @memberof ConcertService
     */
    public UpdateConcert(updateConcert: UpdateConcert) {
        return this.apiService.Update<Concert>(
            EndpointRoute.Concert,
            updateConcert.id,
            updateConcert,
        );
    }

    /**
     * Deletes an existing `Concert` instance.
     *
     * @param {DeleteConcert} deleteConcert - The `DeleteConcert` object containing the unique identifier of the `Concert` instance to delete.
     * @memberof ConcertService
     */
    public DeleteConcert(deleteConcert: DeleteConcert) {
        return this.apiService.Delete(EndpointRoute.Concert, deleteConcert.id);
    }
}
