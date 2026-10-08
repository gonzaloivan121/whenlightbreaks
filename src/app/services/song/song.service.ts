import { inject, Service } from '@angular/core';

import { Song, CreateSong, DeleteSong, UpdateSong } from '@models/song.model';

import { SongID } from '@app/types/song.type';
import { AlbumID } from '@app/types/album.type';
import { ArtistID } from '@app/types/artist.type';

import { ApiService, EndpointRoute } from '@services/api/api.service';

/**
 * Service for managing `Song` data.
 *
 * @export
 * @class SongService
 */
@Service()
export class SongService {
    /**
     * The API service to request and post data from.
     *
     * @private
     * @type {ApiService}
     * @memberof SongService
     */
    private readonly apiService: ApiService = inject(ApiService);

    /**
     * Creates a new `Song` instance and adds it to the list of songs.
     *
     * @param {CreateSong} createSong - The `CreateSong` object containing the data for the new `Song` instance.
     * @memberof SongService
     */
    public CreateSong(createSong: CreateSong) {
        return this.apiService.Create<Song>(EndpointRoute.Song, createSong);
    }

    /**
     * Retrieves a list of all `Song` instances.
     *
     * @memberof SongService
     */
    public GetSongs() {
        return this.apiService.Get<Song[]>(EndpointRoute.Song);
    }

    /**
     * Retrieves a `Song` instance by its unique identifier.
     *
     * @param {SongID} id - The unique identifier of the `Song` instance to retrieve.
     * @memberof SongService
     */
    public GetSongById(id: SongID) {
        return this.apiService.GetById<Song>(EndpointRoute.Song, id);
    }

    /**
     * Retrieves a list of `Song` instances by the unique identifier of the associated `Album`.
     *
     * @param {AlbumID} albumId - The unique identifier of the `Album` whose `Song` instances are to be retrieved.
     * @memberof SongService
     */
    public GetSongsByAlbumId(albumId: AlbumID) {
        return this.apiService.GetByDependantId<Song[]>(
            EndpointRoute.Song,
            EndpointRoute.Album,
            albumId,
        );
    }

    /**
     * Retrieves a list of `Song` instances by the unique identifier of the associated `Artist`.
     *
     * @param {ArtistID} artistId - The unique identifier of the `Artist` whose `Song` instances are to be retrieved.
     * @memberof SongService
     */
    public GetSongsByArtistId(artistId: ArtistID) {
        return this.apiService.GetByDependantId<Song[]>(
            EndpointRoute.Song,
            EndpointRoute.Artist,
            artistId,
        );
    }

    /**
     * Updates an existing `Song` instance with new data.
     *
     * @param {UpdateSong} updateSong - The `UpdateSong` object containing the updated data for the `Song` instance.
     * @memberof SongService
     */
    public UpdateSong(updateSong: UpdateSong) {
        return this.apiService.Update<Song>(EndpointRoute.Song, updateSong.id, updateSong);
    }

    /**
     * Deletes an existing `Song` instance.
     *
     * @param {DeleteSong} deleteSong - The `DeleteSong` object containing the unique identifier of the `Song` instance to delete.
     * @memberof SongService
     */
    public DeleteSong(deleteSong: DeleteSong) {
        return this.apiService.Delete(EndpointRoute.Song, deleteSong.id);
    }
}
